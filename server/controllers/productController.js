const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncError')
const multer = require("multer");
const path = require("path");

//Get Products - /api/v1/products
exports.getProducts = catchAsyncError(async (req, res, next)=>{
    const products = await Product.find();
        if(!products) {
        return next(new ErrorHandler('Product not found', 400));
    }
    res.status(200).json({
        success : true,
        products
    })
})

let storage = multer.diskStorage({
    // cb means call back
    destination :(req , file, cb)=>{
      cb(null, path.join(__dirname,'..' , '/uploads/product' ))
    },
    filename:(req, file, cb)=>{
        cb(null, file.fieldname + "__" + Date.now() + path.extname(file.originalname))
    }
})
let maxsize = 5 * 1000 * 1000;
let upload = multer({
    storage:storage,
    limits: {
        fileSize: maxsize // Around 2MB
    }
})



//Create Product - /api/v1/product/new
exports.newProduct = catchAsyncError(async (req, res, next)=>{
    let uploaderhander = upload.single('file');
      uploaderhander(req,res,async function(err) {
        if (err instanceof multer.MulterError) {
            if (err.code = "LIMIT_FILE_SIZE") {
                res.status(400).json({messge : "maximum file size 5MB only"})
            }
            return;
        }

        if (req.file) {
            let BASE_URL = process.env.BACKEND_URL;
            if(process.env.NODE_ENV === "production"){
                BASE_URL = `${req.protocol}://${req.get('host')}`
            }
            let url = `${BASE_URL}/uploads/product/${req.file.filename}`;
            req.body.image = url;

            // req.body.user = req.user.id;
            const product = await Product.create(req.body);
            res.status(201).json({
                success: true,
                product
            })

        }else{
            // res.status(200).json({message : "uploaded image successfully!"})
              res.status(400).json({message : "No file"})
        }
    })
});

//Get Single Product - api/v1/product/:id
exports.getSingleProduct = catchAsyncError(async(req, res, next) => {
    const product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler('Product not found', 400));
    }

    res.status(201).json({
        success: true,
        product
    })
})

//Update Product - api/v1/product/:id
exports.updateProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    //if images not cleared we keep existing images
    if(req.body.clearImage === 'false' ) {
        req.body.image = product.image;
    }else{
        let uploaderhander = upload.single('file');
        uploaderhander(req,res,async function(err) {
            if (err instanceof multer.MulterError) {
                if (err.code = "LIMIT_FILE_SIZE") {
                    res.status(400).json({messge : "maximum file size 5MB only"})
                }
                return;
            }
        });

        
        if (req.file) {
            let BASE_URL = process.env.BACKEND_URL;
            if(process.env.NODE_ENV === "production"){
                BASE_URL = `${req.protocol}://${req.get('host')}`
            }
            let url = `${BASE_URL}/uploads/product/${req.file.filename}`;
            req.body.image = url;
        }
    }
    
    if(!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        success: true,
        product
    })
})

//Delete Product - api/v1/product/:id
exports.deleteProduct = catchAsyncError(async (req, res, next) =>{
    const product = await Product.findById(req.params.id);

    if(!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product Deleted!"
    })

})

// get admin products  - api/v1/admin/products
exports.getAdminProducts = catchAsyncError(async (req, res, next) =>{
    const products = await Product.find();
    res.status(200).send({
        success: true,
        products
    })
});