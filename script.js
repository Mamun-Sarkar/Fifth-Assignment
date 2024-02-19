

const allseats = document.getElementsByClassName("seat-btn")

        let remaining = 8;
        let count = 0;
        let sum = 0;
        
for (const seat of allseats){

       seat.addEventListener('click', function (event) {

        count = count + 1;

         document.getElementById("seat-count").innerText = parseInt(count);
        
        remaining = remaining - 1;

        document.getElementById("available-seat").innerText = parseInt (remaining);

        const value = event

        value.classList.add("bg-[#1DD100]")

        value.classList.add("text-white")


        const tableBody = document.getElementById("table-body")

        const tBody1 = document.createElement("tr")
        const tBody2 = document.createElement("tr")
        const tBody3 = document.createElement("tr")


        tBody1.innerText = event.innerText;
        tBody2.innerText = "economy";
        tBody3.innerText = 550;


        tableBody.appendChild(tBody1)
        tableBody.appendChild(tBody2)
        tableBody.appendChild(tBody3)




        const totalPrice = document.getElementById("total-price")

        

        const price = document.getElementById("price")
        const convertedPrice = parseInt(price)

        sum = sum + convertedPrice

        totalPrice.innerText = parseInt(sum) 


        const applyBtn =document.getElementById("apply-btn")

        let sum2 = 0;

        applyBtn.addEventListener("click", function (){


             let grandTotal = document.getElementById("grand-total")

        let input = document.getElementById("input")


        if(input.value === "new 15"){
            sum2 = sum - (sum * 0.15)

            grandTotal.innerText = parseInt(sum2)

        }
        if(input.value === "cuple 20"){
            sum2 = sum - (sum * 0.20)

            grandTotal.innerText = parseInt(sum2)

        }

        })






       

        



        

    })
}


function click(){
    const show = document.getElementById("show")

    show.classList.remove("hidden")
}





