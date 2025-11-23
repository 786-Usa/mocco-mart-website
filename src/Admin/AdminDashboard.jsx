import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, ShoppingCart, Package, DollarSign, Plus, Edit2, Trash2, Search, Menu, X } from 'lucide-react';

// Initial Mock Data
const initialCategories = [
  { id: 1, name: 'Electronics', description: 'Electronic devices and accessories', productCount: 45 },
  { id: 2, name: 'Clothing', description: 'Men and Women fashion', productCount: 120 },
  { id: 3, name: 'Books', description: 'Books and magazines', productCount: 89 }
];

const initialSubcategories = [
  { id: 1, name: 'Smartphones', categoryId: 1, categoryName: 'Electronics' },
  { id: 2, name: 'Laptops', categoryId: 1, categoryName: 'Electronics' },
  { id: 3, name: 'Men Shirts', categoryId: 2, categoryName: 'Clothing' },
  { id: 4, name: 'Women Dresses', categoryId: 2, categoryName: 'Clothing' }
];

const initialProducts = [
  { id: 1, name: 'iPhone 15 Pro', category: 'Electronics', subcategory: 'Smartphones', price: 999, stock: 45, status: 'Active' },
  { id: 2, name: 'MacBook Pro M3', category: 'Electronics', subcategory: 'Laptops', price: 1999, stock: 8, status: 'Active' },
  { id: 3, name: 'Cotton T-Shirt', category: 'Clothing', subcategory: 'Men Shirts', price: 29, stock: 150, status: 'Active' },
  { id: 4, name: 'Summer Dress', category: 'Clothing', subcategory: 'Women Dresses', price: 59, stock: 3, status: 'Active' }
];

const initialOrders = [
  { id: 1001, customer: 'John Doe', product: 'iPhone 15 Pro', amount: 999, status: 'Delivered', date: '2024-11-20' },
  { id: 1002, customer: 'Jane Smith', product: 'MacBook Pro M3', amount: 1999, status: 'Pending', date: '2024-11-22' },
  { id: 1003, customer: 'Bob Johnson', product: 'Cotton T-Shirt', amount: 29, status: 'Shipped', date: '2024-11-21' }
];

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Customer', status: 'Active', joined: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Customer', status: 'Active', joined: '2024-02-20' },
  { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'Admin', status: 'Active', joined: '2023-12-01' }
];

const revenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 }
];

const categoryData = [
  { name: 'Electronics', value: 45 },
  { name: 'Clothing', value: 120 },
  { name: 'Books', value: 89 }
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // State for all data
  const [categories, setCategories] = useState(initialCategories);
  const [subcategories, setSubcategories] = useState(initialSubcategories);
  const [products, setProducts] = useState(initialProducts);
  const [orders, setOrders] = useState(initialOrders);
  const [users, setUsers] = useState(initialUsers);
  
  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

  const stats = [
    { title: 'Total Users', value: users.length, icon: Users, color: 'bg-blue-500' },
    { title: 'Total Orders', value: orders.length, icon: ShoppingCart, color: 'bg-green-500' },
    { title: 'Total Products', value: products.length, icon: Package, color: 'bg-yellow-500' },
    { title: 'Total Revenue', value: '$' + orders.reduce((sum, o) => sum + o.amount, 0), icon: DollarSign, color: 'bg-purple-500' }
  ];

  // CRUD Functions
  const handleCreate = (type) => {
    setModalType(type);
    setEditingItem(null);
    setFormData({});
    setShowModal(true);
  };

  const handleEdit = (type, item) => {
    setModalType(type);
    setEditingItem(item);
    setFormData(item);
    setShowModal(true);
  };

  const handleDelete = (type, id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      switch(type) {
        case 'category':
          setCategories(categories.filter(c => c.id !== id));
          break;
        case 'subcategory':
          setSubcategories(subcategories.filter(s => s.id !== id));
          break;
        case 'product':
          setProducts(products.filter(p => p.id !== id));
          break;
        case 'order':
          setOrders(orders.filter(o => o.id !== id));
          break;
        case 'user':
          setUsers(users.filter(u => u.id !== id));
          break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    switch(modalType) {
      case 'category':
        if (editingItem) {
          setCategories(categories.map(c => c.id === editingItem.id ? { ...formData, id: editingItem.id } : c));
        } else {
          setCategories([...categories, { ...formData, id: Date.now(), productCount: 0 }]);
        }
        break;
      case 'subcategory':
        if (editingItem) {
          setSubcategories(subcategories.map(s => s.id === editingItem.id ? { ...formData, id: editingItem.id } : s));
        } else {
          const category = categories.find(c => c.id === parseInt(formData.categoryId));
          setSubcategories([...subcategories, { 
            ...formData, 
            id: Date.now(), 
            categoryId: parseInt(formData.categoryId),
            categoryName: category?.name 
          }]);
        }
        break;
      case 'product':
        if (editingItem) {
          setProducts(products.map(p => p.id === editingItem.id ? { ...formData, id: editingItem.id } : p));
        } else {
          setProducts([...products, { ...formData, id: Date.now(), status: 'Active' }]);
        }
        break;
      case 'order':
        if (editingItem) {
          setOrders(orders.map(o => o.id === editingItem.id ? { ...formData, id: editingItem.id } : o));
        } else {
          setOrders([...orders, { ...formData, id: Date.now(), date: new Date().toISOString().split('T')[0] }]);
        }
        break;
      case 'user':
        if (editingItem) {
          setUsers(users.map(u => u.id === editingItem.id ? { ...formData, id: editingItem.id } : u));
        } else {
          setUsers([...users, { ...formData, id: Date.now(), joined: new Date().toISOString().split('T')[0] }]);
        }
        break;
    }
    
    setShowModal(false);
    setFormData({});
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Category Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" labelLine={false} label={(entry) => entry.name} outerRadius={80} fill="#8884d8" dataKey="value">
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Order ID</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Customer</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(0, 5).map(order => (
                  <tr key={order.id} className="border-b">
                    <td className="py-2 text-sm">#{order.id}</td>
                    <td className="py-2 text-sm">{order.customer}</td>
                    <td className="py-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Low Stock Products</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Product</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Stock</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.filter(p => p.stock < 10).map(product => (
                  <tr key={product.id} className="border-b">
                    <td className="py-2 text-sm">{product.name}</td>
                    <td className="py-2 text-sm">{product.stock}</td>
                    <td className="py-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-800">
                        Low Stock
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTable = (type, data, columns) => (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b flex justify-between items-center">
        <h2 className="text-xl font-semibold capitalize">Manage {type}s</h2>
        <button onClick={() => handleCreate(type)} className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
          <Plus size={20} /> Add {type}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map(col => (
                <th key={col.key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {col.label}
                </th>
              ))}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map(item => (
              <tr key={item.id}>
                {columns.map(col => (
                  <td key={col.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item[col.key]}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEdit(type, item)} className="text-blue-600 hover:text-blue-900 mr-4">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDelete(type, item.id)} className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderModal = () => {
    if (!showModal) return null;

    const getFormFields = () => {
      switch(modalType) {
        case 'category':
          return (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description || ''}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>
            </>
          );
        case 'subcategory':
          return (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory Name</label>
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={formData.categoryId || ''}
                  onChange={(e) => setFormData({...formData, categoryId: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </>
          );
        case 'product':
          return (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <input
                    type="text"
                    value={formData.category || ''}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
                  <input
                    type="text"
                    value={formData.subcategory || ''}
                    onChange={(e) => setFormData({...formData, subcategory: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                  <input
                    type="number"
                    value={formData.price || ''}
                    onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stock</label>
                  <input
                    type="number"
                    value={formData.stock || ''}
                    onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </>
          );
        case 'order':
          return (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Customer Name</label>
                <input
                  type="text"
                  value={formData.customer || ''}
                  onChange={(e) => setFormData({...formData, customer: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product</label>
                <input
                  type="text"
                  value={formData.product || ''}
                  onChange={(e) => setFormData({...formData, product: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <input
                    type="number"
                    value={formData.amount || ''}
                    onChange={(e) => setFormData({...formData, amount: parseFloat(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={formData.status || ''}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
            </>
          );
        case 'user':
          return (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email || ''}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <select
                    value={formData.role || ''}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Customer">Customer</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={formData.status || ''}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </>
          );
        default:
          return null;
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold capitalize">
              {editingItem ? 'Edit' : 'Add'} {modalType}
            </h3>
            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {getFormFields()}
            <div className="flex gap-4 mt-6">
              <button type="submit" className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                {editingItem ? 'Update' : 'Create'}
              </button>
              <button type="button" onClick={() => setShowModal(false)} className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'categories':
        return renderTable('category', categories, [
          { key: 'name', label: 'Name' },
          { key: 'description', label: 'Description' },
          { key: 'productCount', label: 'Products' }
        ]);
      case 'subcategories':
        return renderTable('subcategory', subcategories, [
          { key: 'name', label: 'Name' },
          { key: 'categoryName', label: 'Category' }
        ]);
      case 'products':
        return renderTable('product', products, [
          { key: 'name', label: 'Name' },
          { key: 'category', label: 'Category' },
          { key: 'subcategory', label: 'Subcategory' },
          { key: 'price', label: 'Price' },
          { key: 'stock', label: 'Stock' }
        ]);
      case 'orders':
        return renderTable('order', orders, [
          { key: 'id', label: 'Order ID' },
          { key: 'customer', label: 'Customer' },
          { key: 'product', label: 'Product' },
          { key: 'amount', label: 'Amount' },
          { key: 'status', label: 'Status' },
          { key: 'date', label: 'Date' }
        ]);
      case 'users':
        return renderTable('user', users, [
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'role', label: 'Role' },
          { key: 'status', label: 'Status' },
          { key: 'joined', label: 'Joined' }
        ]);
      default:
        return renderDashboard();
    }
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart },
    { id: 'categories', label: 'Categories', icon: Package },
    { id: 'subcategories', label: 'Subcategories', icon: Package },
    { id: 'products', label: 'Products', icon: ShoppingCart },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'users', label: 'Users', icon: Users }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          {sidebarOpen && <h1 className="text-xl font-bold">Admin Panel</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-800 rounded">
            <Menu size={24} />
          </button>
        </div>
        <nav className="flex-1 p-4">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors ${
                activeTab === item.id ? 'bg-blue-600' : 'hover:bg-gray-800'
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 capitalize">{activeTab}</h1>
            <p className="text-gray-600 mt-1">Manage your {activeTab} here</p>
          </div>
          {renderContent()}
        </div>
      </div>

      {/* Modal */}
      {renderModal()}
    </div>
  );
}

export default AdminDashboard;