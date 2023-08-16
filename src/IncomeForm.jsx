import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function IncomeForm({ onAddIncome }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || isNaN(amount) || amount <= 0) {
      return;
    }

    const newIncome = {
      title,
      amount: parseFloat(amount),
      type,
      description,
      date,
    };

    // Call the onAddIncome function with the new income object
    onAddIncome(newIncome);

    // Reset the form fields
    setTitle("");
    setAmount(0);
    setType("income");
    setDate("");
    setDescription("");
  };

  return (
    <form className="box" onSubmit={handleSubmit}>
      <TextField
        label="Income Title"
        variant="outlined"
        style={{
          width: "100%",
          marginBottom: "10px",
          display: "block",
          fontWeight: "bold",
        }}
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Amount"
        type="number"
        variant="outlined"
        margin="normal"
        style={{
          width: "100%",
          marginBottom: "10px",
          display: "block",
          fontWeight: "bold",
        }}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <TextField
        label="Date"
        type="date"
        variant="outlined"
        margin="normal"
        style={{
          width: "100%",
          marginBottom: "10px",
          display: "block",
          fontWeight: "bold",
        }}
        InputLabelProps={{
          shrink: true,
        }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <TextField
        label="Description"
        variant="outlined"
        multiline
        rows={4}
        margin="normal"
        style={{
          width: "100%",
          marginBottom: "10px",
          display: "block",
          fontWeight: "bold",
        }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Select
        label="Type"
        variant="outlined"
        style={{
          width: "100%",
          marginBottom: "10px",
          display: "block",
          fontWeight: "bold",
        }}
        margin="normal"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <MenuItem value="income">Income</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </Select>
      <Button
        variant="contained"
        type="submit"
        sx={{ background: "rgb(33, 214, 214);", color: "black" }}
      >
        Add Income
      </Button>
    </form>
  );
}

export default IncomeForm;
