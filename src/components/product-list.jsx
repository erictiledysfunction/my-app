import React from "react";
import "./product-list.css";
import { useState } from "react";


export function ProductList() {
  const [products, setProducts] = useState([
    { id: "1", name: "product", category: "Toiletry", quantity: 150, status: "in-stock" },
    { id: "2", name: "Heifn", category: "asdd", quantity: 150, status: "low-stock" },
    { id: "3", name: "Heifn", category: "asdd", quantity: 150, status: "low-stock" },
    { id: "4", name: "Heifn", category: "asdd", quantity: 150, status: "low-stock" },
    { id: "5", name: "Heifn", category: "asdd", quantity: 150, status: "in-stock" },
    { id: "6", name: "Heifn", category: "asdd", quantity: 150, status: "in-stock" },
    { id: "7", name: "Heifn", category: "asdd", quantity: 150, status: "in-stock" },
    { id: "8", name: "Heifn", category: "asdd", quantity: 150, status: "in-stock" },
  ])

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now().toString(),
      name: "New Product",
      category: "Category",
      quantity: 0,
      status: "in-stock",
    }
    setProducts([...products, newProduct])
  }

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const handleEditProduct = (id) => {
    console.log("Edit product:", id)
    // Backend integration point for edit functionality
  }

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2>Product Inventory</h2>
        <button className="add-button" onClick={handleAddProduct}>
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
                <span className={`status-badge status-${product.status}`}>
                  {product.status === "in-stock" ? "✓ In stock" : "⬇ Low stock"}
                </span>
              </div>
              <div className="table-col action-col">
                <button
                  className="action-button edit-button"
                  onClick={() => handleEditProduct(product.id)}
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
    </div>
  )
}
