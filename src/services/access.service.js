const userModel = require("../models/account/user.model") 
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const RoleUser = {
    ADMIN: '1',
    USER: '2'
}
class AccessService {
    static signUp = async ({name, email, password}) => {
        try{
            const holderUser = await userModel.findOne({email}).lean()
            if(holderUser) {
                return {
                    code: 'xxxx',
                    message: 'người dùng đã tồn tại'
                }
            }

            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = await userModel.create({
                name, email, password: passwordHash, roles: [RoleUser.ADMIN]
            })

            if(newUser) {
               // created privateKey, publicKey
               // privateKey đẩy cho người dùng
               // publicKey lưu trong hệ thống
               // privateKey sign publickey
               // publicKey verify privateKey

               const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa', {
                modulusLenghth: 4096
               })

               console.log({privateKey, publicKey})
            }

        }catch (err) {
            return {
                code: 'xxx',
                massage: error.massage,
                status: 'error'
            }
        }
    }
}

module.exports = AccessService