const {
  createProduct,
  getProduct,
  getProduct_By_SubCategory_id,
  get_Product_by_Id,
} = require("../Models/Products"); // Correct the path to the file where createProduct is defined

const createProduct_Controller = async (req, res) => {
  const {
    product_name,
    product_description,
    product_price,
    product_subcategory,
  } = req.body;

  // Validate if all required fields are provided
  if (
    !product_name ||
    !product_description ||
    !product_price ||
    !product_subcategory
  ) {
    return res.status(400).json({
      message:
        "product_id, product_name, product_description, product_price,  product_subcategory are required.",
    });
  }

  try {
    // Call the createProduct function
    const response = await createProduct(
      product_name,
      product_description,
      product_price,
      product_subcategory
    );

    // Send success response
    res.status(201).json({
      message: "Product created successfully!",
      Product: response,
    });
  } catch (error) {
    // Log the error and send a 500 server error response
    console.error("Error creating product:", error); // Fixed error message
    res.status(500).json({ message: "Internal server error" });
  }
};

const getProduct_Controller = async (req, res) => {
  console.log("df");
  try {
    const respone = await getProduct();
    res.status(200).json({
      message: "GET getProduct sUCCESFULLY",
      products: respone,
    });
  } catch (error) {
    console.error("Error creating getProduct:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProduct_By_SubCategoryId__Controller = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await getProduct_By_SubCategory_id(id); // Use await here
    res.status(200).json({
      message: "GET getProduct SUCCESSFULLY",
      products: response,
    });
  } catch (error) {
    console.error("Error fetching products by subcategory:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const get_Product_by_Id_Controller = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await get_Product_by_Id(id); // Use await here
    res.status(200).json({
      message: "GET getProduct SUCCESSFULLY",
      product: response,
    });
  } catch (error) {
  console.error("Error fetching products by subcategory:", error);
    res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
  createProduct_Controller,
  getProduct_Controller,
  getProduct_By_SubCategoryId__Controller,
  get_Product_by_Id_Controller
}; // Corrected the export
