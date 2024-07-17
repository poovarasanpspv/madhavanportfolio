const express = require('express');
const path = require('path')

const { 
    registerUser,
    loginUser,
    logoutUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    getUserProfile
 } = require('../controllers/authController');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/authenticate')

router.route('/register').post(registerUser);
router.route('/myprofile').get(isAuthenticatedUser, getUserProfile);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);

//Admin routes
router.route('/admin/users').get(isAuthenticatedUser,authorizeRoles('admin'), getAllUsers);
router.route('/admin/user/:id').get(isAuthenticatedUser,authorizeRoles('admin'), getUser)
                                .put(isAuthenticatedUser,authorizeRoles('admin'), updateUser)
                                .delete(isAuthenticatedUser,authorizeRoles('admin'), deleteUser);


module.exports = router;