import React from 'react';

const OrderDetailsModal = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-xl m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Order Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Order Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">Order Info</h3>
            <p><span className="font-medium">Order ID:</span> {order._id}</p>
            <p><span className="font-medium">Order Number:</span> {order.orderNumber || 'N/A'}</p>
            <p><span className="font-medium">Date:</span> {new Date(order.createdAt).toLocaleString()}</p>
            <p><span className="font-medium">Status:</span> 
              <span className={`ml-2 px-2 py-1 rounded text-sm ${
                order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                order.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {order.status}
              </span>
            </p>
          </div>

          {/* User Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">User Info</h3>
            <p><span className="font-medium">Name:</span> {order.user?.name}</p>
            <p><span className="font-medium">Email:</span> {order.user?.email}</p>
          </div>

          {/* Shipping Address */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">Shipping Address</h3>
            {order.shippingAddress ? (
              <div className="text-sm">
                <p>{order.shippingAddress.name}</p>
                <p>{order.shippingAddress.line1}</p>
                {order.shippingAddress.line2 && <p>{order.shippingAddress.line2}</p>}
                <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
                <p>{order.shippingAddress.country}</p>
                <p>Phone: {order.shippingAddress.phone}</p>
              </div>
            ) : <p className="text-gray-500">No shipping address provided</p>}
          </div>

           {/* Payment Info */}
           <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">Payment Info</h3>
            {order.payment ? (
              <div className="text-sm">
                <p><span className="font-medium">Method:</span> {order.payment.provider}</p>
                <p><span className="font-medium">Status:</span> {order.payment.status}</p>
                <p><span className="font-medium">Amount:</span> {order.payment.amount}</p>
              </div>
            ) : <p className="text-gray-500">No payment info</p>}
          </div>
        </div>

        {/* Order Items */}
        <div className="mt-8">
          <h3 className="font-semibold text-lg border-b pb-2 mb-4">Items</h3>
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {order.items.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      {item.product?.images?.[0]?.url && (
                        <img src={item.product.images[0].url} alt="" className="w-10 h-10 object-cover rounded" />
                      )}
                      <span>{item.product?.name || 'Unknown Product'}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">₹{item.price}</td>
                  <td className="px-4 py-2">{item.quantity}</td>
                  <td className="px-4 py-2">₹{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="mt-6 flex justify-end">
          <div className="w-64 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹{order.totals?.subtotal || 0}</span>
            </div>
             <div className="flex justify-between">
              <span>Shipping:</span>
              <span>₹{order.totals?.shipping || 0}</span>
            </div>
             <div className="flex justify-between">
              <span>Tax:</span>
              <span>₹{order.totals?.tax || 0}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Grand Total:</span>
              <span>₹{order.totals?.grandTotal || order.totalAmount || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
