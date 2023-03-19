const mongoose =  require('mongoose')

const categories_model = mongoose.Schema({
    type: { type : String, default: "Investment"},
    color : {type: String, default: '#FCBE44'}
})

const transaction_model = mongoose.Schema({
    name: { type : String, default:"Anonymous"},
    type: { type : String, default:"Investment"},
    amount: { type : Number},
    date: { type : Date, default : Date.now}
})


const Categories = mongoose.model('Categories', categories_model)
const Transaction = mongoose.model('Transaction', transaction_model);

exports.default = Transaction;
module.exports = {
    Categories,
    Transaction
}