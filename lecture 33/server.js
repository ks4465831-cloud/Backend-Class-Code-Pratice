const bcrypt = require('bcrypt');

const password =  "Khushi@123";
const passwordnew = "Khushi@123";

const hashPassword = async (password) => {
        const salt = await bcrypt.genSalt(10);
        console.log(salt);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(hashedPassword);
        const isMatch = await bcrypt.compare("Khushi@123", hashedPassword);
        console.log(isMatch);
};

hashPassword(password);
hashPassword(passwordnew);

