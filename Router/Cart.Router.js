import { Router } from "express";
import {
  createRecord,
  deleteRecord,
  getRecord,
  getRecords,
  updateRecord,
} from "../Controllers/Cart.Controller.js";

const router = Router();

router.get("/record", getRecords);

router.get("/record/:id", getRecord);

router.post("/record", createRecord);

router.put("/record/:id", updateRecord);

router.delete("/record/:id", deleteRecord);

export default router;
