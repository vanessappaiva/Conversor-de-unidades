function mudarCampos() {
				var opcao = document.getElementById("tpUnidade").value;
				if (opcao == 1){
					document.getElementById("unidade_de").innerHTML = 
					"<label for='unidade1'>De:</label><br><select id='unidade1' name='unidade1'><option value='dolar'>Dólar(USD)</option><option value='euro'>Euro(EUR)</option><option value='real'>Real(BRL)</option></select>";
					document.getElementById("unidade_para").innerHTML = 
					"<label for='unidade2'>Para:</label><br><select id='unidade2' name='unidade2'><option value='dolar'>Dólar(USD)</option><option value='euro'>Euro(EUR)</option><option value='real'>Real(BRL)</option></select>";
				} 
        else if (opcao == 2){
					document.getElementById("unidade_de").innerHTML = 
					"<label for='unidade1'>De:</label><br><select id='unidade1' name='unidade1'><option value='mt'>Metro(m)</option><option value='dm'>Decímetros(dm)</option><option value='cm'>Centímetros(cm)</option></select>";
					document.getElementById("unidade_para").innerHTML = 
					"<label for='unidade2'>Para:</label><br><select id='unidade2' name='unidade2'><option value='mt'>Metro(m)</option><option value='dm'>Decímetros(dm)</option><option value='cm'>Centímetros(cm)</option></select>";
				} 
        else if (opcao == 3){
					document.getElementById("unidade_de").innerHTML = 
					"<label for='unidade1'>De:</label><br><select id='unidade1' name='unidade1'><option value='kmh'>km/h</option><option value='ms'>m/s</option></select>";
					document.getElementById("unidade_para").innerHTML = 
					"<label for='unidade2'>Para:</label><br><select id='unidade2' name='unidade2'><option value='kmh'>km/h</option><option value='ms'>m/s</option></select>";
          document.getElementById("btn_secreto").innerHTML = 
					"<button class='btn-secreto' id='btn-secreto' onclick='desafio_secreto();'> o que é isso? </button>";
				} 
			}

			function calcular()
			{
			  var op = parseInt(document.getElementById("tpUnidade").value);
			  var valor = parseFloat(document.getElementById("valorPConverter").value);
			  var und1 = document.getElementById("unidade1").value;
			  var und2 = document.getElementById("unidade2").value;
			  var resposta = 0;
			  switch (op) {
				  case 1:
				    	if(und1=="real")
				    	{
				    		if(und2=="dolar")
				    		{
			                  resposta = valor * 0.18;
			                  resposta = "$ " + resposta.toFixed(2);
			                }
				    		else if(und2=="euro")
				    		{
				    			resposta = valor * 0.15;
                  				resposta = "€ " + resposta.toFixed(2);
				    		}
				    		else if(und2=="real")
				    		{
				    			resposta = valor;
                  				resposta = "R$ " + resposta.toFixed(2);
				    		}
				    	}else if(und1=="dolar")
				    	{
				    		if(und2=="real")
				    		{
			                  resposta = valor * 5.52;
			                  resposta = "R$ " + resposta.toFixed(2);
			                }
				    		else if(und2=="euro")
				    		{
				    			resposta = valor * 0.84;
                  				resposta = "€ " + resposta.toFixed(2);
				    		}
				    		else if(und2=="dolar")
				    		{
				    			resposta = valor;
                  				resposta = "$ " + resposta.toFixed(2);
				    		}
				    	}else if(und1=="euro")
				    	{
				    		if(und2=="real")
				    		{
			                  resposta = valor * 6.54;
			                  resposta = "R$ " + resposta.toFixed(2);
			                }
				    		else if(und2=="dolar")
				    		{
				    			resposta = valor * 1.18;
                  				resposta = "$ " + resposta.toFixed(2);
				    		}
				    		else if(und2=="euro")
				    		{
				    			resposta = valor;
                  				resposta = "€ " + resposta.toFixed(2);
				    		}
				    	}
            
            document.getElementById("resposta").innerHTML = resposta;
				    break;
				  case 2:
				    if(und1=="mt")
				    	{
				    		if(und2=="cm")
				    		{
			                  resposta = valor * 100;
			                  resposta = resposta.toFixed(2) + " cm";
			                }
				    		else if(und2=="dm")
				    		{
				    			resposta = valor * 10;
			                  	resposta = resposta.toFixed(2) + " dm";
				    		}
				    		else if(und2=="mt")
				    		{
				    			resposta = valor;
			                  	resposta = resposta.toFixed(2) + " m";
				    		}
				    	}else if(und1=="dm")
				    	{
				    		if(und2=="cm")
				    		{
			                  resposta = valor * 10;
			                  resposta = resposta.toFixed(2) + " cm";
			                }
				    		else if(und2=="mt")
				    		{
				    			resposta = valor * 0.1;
			                  	resposta = resposta.toFixed(2) + " m";
				    		}
				    		else if(und2=="dm")
				    		{
				    			resposta = valor;
			                  	resposta = resposta.toFixed(2) + " dm";
				    		}
				    	}else if(und1=="cm")
				    	{
				    		if(und2=="mt")
				    		{
			                  resposta = valor * 0.01;
			                  resposta = resposta.toFixed(2) + " m";
			                }
				    		else if(und2=="dm")
				    		{
				    			resposta = valor * 0.1;
			                  	resposta = resposta.toFixed(2) + " dm";
				    		}
				    		else if(und2=="cm")
				    		{
				    			resposta = valor;
			                  	resposta = resposta.toFixed(2) + " cm";
				    		}
				    	}
            
            document.getElementById("resposta").innerHTML = resposta;
				    break;
				  case 3:
				    if(und1=="kmh")
				    	{
				    		if(und2=="ms")
				    		{
			                  resposta = valor * 0.08;
			                  resposta = resposta.toFixed(2) + " m/s";
			                }
				    		else if(und2=="kmh")
				    		{
				    			resposta = valor;
			                  	resposta = resposta.toFixed(2) + " km/h";
				    		}
				    	}else if(und1=="ms")
				    	{
				    		if(und2=="kmh")
				    		{
			                  resposta = valor * 3.6;
			                  resposta = resposta.toFixed(2) + " km/h";
			                }
				    		else if(und2=="ms")
				    		{
				    			resposta = valor;
			                  	resposta = resposta.toFixed(2) + " m/s";
				    		}
				    	}
            
            document.getElementById("resposta").innerHTML = resposta;
				    break;
				  default:
				    resposta = "inválido";
				}       
			};

function desafio_secreto()
{
  document.getElementById("body").className = "interestelar";
  
  document.getElementById("secreto_valor").innerHTML = "<label style='color: #3a3a3a; text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);' for='valor_secreto'>Valor Secreto</label><br><input style='background: rgba(0, 0, 0, 0.3);color: #fff;text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);' type='text' id='valor_secreto' name='valor_secreto'><br>";
  document.getElementById("secreto_op").innerHTML = "<label for='op_secreto' style='color: #3a3a3a; text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);'>Conversão Secreta</label><br><select style='background: rgba(0, 0, 0, 0.3);color: #fff;text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);' id='op_secreto' name='op_secreto'><option value='conv1'>Anos Luz -> Km</option><option value='conv2'>Km -> Anos Luz</option></select>";
  document.getElementById("secreto_converte").innerHTML = 
					"<br><button class='btn-secreto2' id='btn-secreto2' onclick='converte_secreto();'> converter </button>";
}

function converte_secreto(){
  var valor_sec = parseFloat(document.getElementById("valor_secreto").value);
  var op_sec = document.getElementById("op_secreto").value;
  var resposta = 0;
  
  if(op_sec=="conv1")
	{
    resposta = valor_sec * 9500000000000;
    resposta = resposta + " km";
  }
	else if(op_sec=="conv2")
    {
      resposta = valor_sec/9500000000000;
      resposta = resposta + " ly";
    }
            
            document.getElementById("resposta_secreta").innerHTML = resposta;
}