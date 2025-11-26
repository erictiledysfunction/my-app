"use client"
import "./ClientProductList.css";
import { useState, useEffect } from "react"

export function ClientProductList() {
  const [products, setProducts] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [quantityChange, setQuantityChange] = useState("")

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

  const handleUpdateStock = (product) => {
    setEditingId(product.id)
    setQuantityChange(product.quantity.toString())
    setShowModal(true)
  }

  const handleSaveStock = async () => {
    if (!quantityChange) return

    const product = products.find(p => p.id === editingId)
    const newQuantity = Number(quantityChange)

    try {
      const response = await fetch("http://localhost/myapi/editProduct.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingId,
          name: product.name,
          category: product.category,
          quantity: newQuantity,
        }),
      })
      if (response.ok) {
        setEditingId(null)
        setQuantityChange("")
        setShowModal(false)
        fetchProducts()
      }
    } catch (error) {
      console.error("Error updating stock:", error)
    }
  }

  // Prevent entering letters like 'e', '+', '-', etc.
  const handleQuantityInput = (e) => {
    const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"]
    if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault()
    }
  }

  return (
    <div className="client-product-list-container">
      <h2>Product Inventory</h2>

      <div className="product-table">
        <div className="table-header">
          <div className="table-col">Product name</div>
          <div className="table-col">Category</div>
          <div className="table-col">Quantity</div>
          <div className="table-col">Status</div>
          <div className="table-col">Action</div>
        </div>

        <div className="table-body">
          {products.map(product => (
            <div key={product.id} className="table-row">
              <div className="table-col">{product.name}</div>
              <div className="table-col">{product.category}</div>
              <div className="table-col">{product.quantity}</div>
              <div className="table-col">
                <span className={`status-badge status-${product.status.replace(/\s/g, '-').toLowerCase()}`}>
                  {product.status === "In stock" && "✓ In stock"}
                  {product.status === "Low stock" && "⬇ Low stock"}
                  {product.status === "Out of stock" && "✗ Out of stock"}
                </span>
              </div>
              <div className="table-col action-col">
                <button
                  className="action-button edit-button"
                  onClick={() => handleUpdateStock(product)}
                  title="Update Stock"
                >
                  ✎
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Update Stock</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Quantity:</label>
                <input
                  type="number"
                  value={quantityChange}
                  onChange={e => setQuantityChange(e.target.value)}
                  onKeyDown={handleQuantityInput}
                  className="quantity-input"
                  placeholder="Enter new quantity"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="save-button" onClick={handleSaveStock}>SAVE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
