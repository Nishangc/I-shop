import express from "express";
import {
  addOrderedItems,
  getOrderById,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderedItems);
router.route("/:id").get(protect, getOrderById);

export default router;
