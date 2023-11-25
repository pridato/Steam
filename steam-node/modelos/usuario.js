const mongoose=require('mongoose');

var Schema=mongoose.Schema;

var UsuarioSchema=new Schema({
    nombre: { type: String, required:[true,'* Nombre obligatario'], maxLength:[50, '* Maxima long.en nobre de 50 caract.'] },
    apellido: { type: String, required:[true,'* Nombre obligatario'], maxLength:[50, '* Maxima long.en nobre de 50 caract.'] },
    cuenta: {
      login: { type: String, required:[true,'* Login obligatario'], maxLength:[50, '* Maxima long.en nobre de 50 caract.']},
      email: { type: String, required:[true,'* Correo obligatario'], maxLength:[50, '* Maxima long.en nobre de 50 caract.'] },
      password: { type: String, required:[true,'* Contrasena obligatario'], maxLength:[50, '* Maxima long.en nobre de 50 caract.'] },
      cuentaActiva:{ type:Boolean, required:true, default: false },
      imagenAvatarBASE64:{type: String, default:'' },
      api_key:{ type: String, required:[true,'* API Key obligatario'], maxLength:[50, '* Maxima long.en nobre de 50 caract.'] },
    }
});

module.exports=mongoose.model('Usuario',UsuarioSchema);