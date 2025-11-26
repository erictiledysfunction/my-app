"use client"
import "./product-list.css"
import { useState, useEffect } from "react"

export function ProductList() {
  const [products, setProducts] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({ name: "", category: "", quantity: "" })

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost/myapi/getProducts.php")
      if (response.ok) {
        const data = await response.json()
        setProducts(data)
      }
    } catch (error) {
      console.error("Error fetching products:", error)
    }
  }

  const handleAddProduct = async () => {
    if (!formData.name || !formData.category || !formData.quantity) return

    try {
      const response = await fetch("http://localhost/myapi/addProduct.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          category: formData.category,
          quantity: Number.parseInt(formData.quantity),
        }),
      })
      if (response.ok) {
        setFormData({ name: "", category: "", quantity: "" })
        setShowModal(false)
        fetchProducts()
      }
    } catch (error) {
      console.error("Error adding product:", error)
    }
  }

  const handleEditProduct = (product) => {
    setFormData({
      name: product.name,
      category: product.category,
      quantity: product.quantity.toString(),
    })
    setEditingId(product.id)
    setIsEditing(true)
    setShowModal(true)
  }

  const handleSaveEdit = async () => {
    if (!formData.name || !formData.category || !formData.quantity) return

    try {
      const response = await fetch("http://localhost/myapi/editProduct.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingId,
          name: formData.name,
          category: formData.category,
          quantity: Number.parseInt(formData.quantity),
        }),
      })
      if (response.ok) {
        setFormData({ name: "", category: "", quantity: "" })
        setEditingId(null)
        setIsEditing(false)
        setShowModal(false)
        fetchProducts()
      }
    } catch (error) {
      console.error("Error editing product:", error)
    }
  }

  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch("http://localhost/myapi/deleteProduct.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
      if (response.ok) {
        fetchProducts()
      }
    } catch (error) {
      console.error("Error deleting product:", error)
    }
  }

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2>Product Inventory</h2>
        <button
          className="add-button"
          onClick={() => {
            setShowModal(true)
            setIsEditing(false)
            setFormData({ name: "", category: "", quantity: "" })
          }}
        >
          + Add Item
        </button>
      </div>

      <div className="product-table">
        <div className="table-header">
          <div className="table-col">Product name</div>
          <div className="table-col">Category</div>
          <div className="table-col">Quantity</div>
          <div className="table-col">Status</div>
          <div className="table-col">ACTION</div>
        </div>

        <div className="table-body">
          {products.map((product) => (
            <div key={product.id} className="table-row">
              <div className="table-col">{product.name}</div>
              <div className="table-col">{product.category}</div>
              <div className="table-col">{product.quantity}</div>
              <div className="table-col">
                <span
                  className={`status-badge status-${product.status
                    .replace(/\s/g, "-")
                    .toLowerCase()}`}
                >
                  {product.status === "In stock" && "✓ In stock"}
                  {product.status === "Low stock" && "⬇ Low stock"}
                  {product.status === "Out of stock" && "✗ Out of stock"}
                </span>
              </div>
              <div className="table-col action-col">
                <button
                  className="action-button edit-button"
                  onClick={() => handleEditProduct(product)}
                  title="Edit"
                >
                  ✎
                </button>
                <button
                  className="action-button delete-button"
                  onClick={() => handleDeleteProduct(product.id)}
                  title="Delete"
                >
                  🗑
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{isEditing ? "Edit Item" : "Add Item"}</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Item name</label>
                <input
                  type="text"
                  placeholder="product"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="">Fresh Produce</option>
                  <option value="Toiletry">Frozen</option>
                  <option value="Electronics">Beverages</option>
                  <option value="Clothing">Pantry</option>
                  <option value="Books">Household essentials</option>
                  <option value="Furniture">Personals</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Quantity:</label>
                <input
                  type="number"
                  placeholder="100"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="save-button"
                onClick={isEditing ? handleSaveEdit : handleAddProduct}
              >
                {isEditing ? "SAVE CHANGES" : "SAVE"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
