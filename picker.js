        var modal = document.getElementById("modal");
        var changeBtn = document.getElementById("change");
        var preview = document.getElementById("preview");
        
        function Preview(){
            color = document.querySelector("input[name='colors']:checked").value;
            preview.style.background = color;
        }
        
        function changeColor(){
            document.body.style.background = color;
            
        }
        
        changeBtn.onclick = function(){
            console.log("hey button has been clicked")
            modal.style.display = "block";
            modal.style.visibility = "visible";
            modal.style.opacity = "1";
        }
        
        function Close() {
            modal.style.visibility = "hidden";
            modal.style.opacity = "0";
            
            preview.style.background = "white";
        }
        
        window.onclick = function(event){
            if(event.target == modal) {
                modal.style.visibility = "hidden";
                modal.style.opacity = "0";
                
                preview.style.background = "white";
                
                document.querySelector("input[name='colors']:checked").checked = false;
            }
        }

