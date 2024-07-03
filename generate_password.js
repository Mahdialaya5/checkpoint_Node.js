const generatepassword=require('generate-password')

const password=generatepassword.generate(3,{
    length:10,
    number:true,
    symbols:true,
    excludeSimilarCharacters:true,
  
})
console.log(password);