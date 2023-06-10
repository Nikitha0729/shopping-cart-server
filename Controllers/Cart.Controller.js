import Cart from "../Models/Cart.js";

export const getRecords = async (req, res) => {
  try {
    const record = await Cart.find();
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch records" });
  }
};

export const getRecord = async (req, res) => {
  try {
    const record = await Cart.findById(req.params.id);
    if (!record) {
      res.status(404).json({ error: "Record not found" });
    } else {
      res.json(record);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch record" });
  }
};

export const createRecord = async (req, res) => {
  try {
    const record = new Cart(req.body);
    await record.save();
    res.status(201).json(record);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create record", message: error.message });
  }
};

export const updateRecord = async (req, res) => {
  try {
    const record = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!record) {
      res.status(404).json({ error: "Record not found" });
    } else {
      res.json(record);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update record" });
  }
};

export const deleteRecord = async (req, res) => {
  try {
    const record = await Cart.findByIdAndDelete(req.params.id);
    if (!record) {
      res.status(404).json({ error: "Record not found" });
    } else {
      res.status(204).json(record);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete record" });
  }
};
