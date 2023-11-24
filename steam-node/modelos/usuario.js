const mongoose=require('mongoose');

var Schema=mongoose.Schema;

var UsuarioSchema=new Schema({
    nombre: { type: String, required:[true,'* Nombre obligatario'], maxLength:[50, '* Maxima long.en nobre de 50 caract.'] },
    apellidos: { type: String, required:[true,'* Nombre obligatario'], maxLength:[50, '* Maxima long.en nobre de 50 caract.'] },
    cuennta: {
      correo: { type: String, required:[true,'* Correo obligatario'], maxLength:[50, '* Maxima long.en nobre de 50 caract.'] },
      contrasena: { type: String, required:[true,'* Contrasena obligatario'], maxLength:[50, '* Maxima long.en nobre de 50 caract.'] },
      cuentaActiva:{ type:Boolean, required:true, default: false },
      login:{ type: String, maxLength:[ 200, '* max.longitud del email 200 cars.'] },
      imagenAvatarBASE64:{type: String, default:'' }
    }
});

module.exports=mongoose.model('Usuario',UsuarioSchema);