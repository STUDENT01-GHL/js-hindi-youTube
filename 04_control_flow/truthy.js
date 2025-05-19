// truthy values  and falsy values

// truthy values -- "0" , 'false' , " " , [] , {} ,  function(){  -- an empty function }

// falsy values -- 0 , -0 , false , bigInt 0n , "" , null , undefined , NaN

// nullish coalscing operator (??) : -- null , undefined

let val1;
// val1 = 3 ?? 7;
val1 = null ?? 7;
console.log(val1);
