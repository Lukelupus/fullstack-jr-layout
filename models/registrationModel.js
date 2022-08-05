import mongoose from "mongoose"


const Schema = mongoose.Schema;

const registerSchema = new Schema(
{
    name: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Registration'
    },
    email:{
        type: String,
        required: [true, "Por favor adicione um email válido"]
    },
    birth: {
        type: Date,
        required: [true, "Por favor adicione data de aniversário"]
    },
    tel: {
        type: String,
        required: [true, "Por favor adicione um telefone válido"]
    },
},  
{
    timestamps: true
}
    );



export default mongoose.model('Registration', registerSchema)