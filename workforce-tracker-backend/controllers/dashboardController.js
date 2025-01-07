const getDashboardData = async (req, res) => {
    try {
      // Add logic to fetch dashboard data
      res.status(200).json({ message: 'Dashboard data fetched successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
  module.exports = {
    getDashboardData,
  };
  