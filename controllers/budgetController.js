const {Categories, Transaction} = require('../models/budgetModel');
const asyncHandler = require("express-async-handler");

const createCategories = asyncHandler(async (req, res) => {
  const { type, color } = req.body;

  if (!type || !color) {
    res.status(400);
    throw new Error("Please, fill in all fields");
  }

  const category = await Categories.create({
    type,
    color
  });

  res.status(201).json(category);
});

const getCategories = asyncHandler(async (req, res) => {
  const categories = await Categories.find({}).sort(
    "-createdAt"
  );
  res.status(200).json({ categories });
});

const createTransactions = asyncHandler(async (req, res) => {
  const { name, type, amount, date } = req.body;

  if (!name || !type || !amount) {
    res.status(400);
    throw new Error("Please, fill in all fields");
  }

  const transaction = await Transaction.create({
    name,
    type,
    amount,
    date
  });

  res.status(201).json(transaction);
});

const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({}).sort(
    "-createdAt"
  );
  res.status(200).json({ transactions });
});

const deleteTransaction = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);
  if (!transaction) {
    res.status(404);
    throw new Error("Transaction not found");
  }
  await Transaction.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Product was deleted succesfully" });
});

const updateTransaction = asyncHandler(async (req, res) => {
  const { name, type, amount, date } = req.body;

  const updatedTransaction = await Transaction.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name,
      type,
      amount,
      date,
    },
    { new: true, runValidators: true }
  );

  res.status(200).json(updatedTransaction);
});

const getLabels = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({}).sort(
    "-createdAt"
  );
  const categories = await Categories.find({}).sort(
    "-createdAt"
  );
  res.status(200).json({ transactions, categories });
});


module.exports = { getLabels, updateTransaction, createCategories, getCategories, createTransactions, getTransactions, deleteTransaction };
