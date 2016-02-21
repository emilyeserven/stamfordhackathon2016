/*var json = {
                "id": "d56c8df1e5bb70955e3aa8922",
                "creationDate": 1456004894749,
                "parentDropId":  {
                "flowId": "fnull",
                "dropId": "dnull"
                },
                "version": 0,
                "elems":  {
                    "motion":  {
                        "type": "boolean",
                        "value": true
                    },
                    "source":  {
                        "type": "string",
                        "value": "ms4"
                    }
                }
            };*/

            var json;
            var motion;// = json.elems.motion.value;
            var lastTime;// = json.creationDate;
            var time;
            var first = true;

            $(document).ready(function(){
                update();
                setInterval(update, 1000);
            });

            function update(){

                $.ajax({
                    url : "https://api.flowthings.io/v0.1/nick/drop/f56c8d69568056d40ae62130f",
                    success: function(data){
                        json = data.body[0];
                        //console.log(json);
                        motion = json.elems.motion.value;
                        console.log(motion)
                        time = json.creationDate;
                        console.log(time);
                        if(first){
                            lastTime = time;
                            first = false;
                        }

                        if(time === lastTime){
                            $('#sic_dav').addClass("glyphicon-eye-open").removeClass("glyphicon-search glyphicon-eye-close");
                        }
                        else{
                            $('#sic_dav').addClass("glyphicon-eye-close").removeClass("glyphicon-search glyphicon-eye-open");
                            lastTime = time;
                        }
                    },
                    headers : {"X-Auth-Token" : "nDrAs2skQbkqCHImjOo0NUnDdY94WFeH"}
                });

            }
