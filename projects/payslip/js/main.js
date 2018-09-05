

		function slip(){
			document.getElementById("hed").style.display="block"
			document.getElementById("myTable").style.display="block"
			document.getElementById("field").style.display="none"
			document.getElementById("message").style.display="none"
			var firstName=document.getElementById("firstName").value
			var fName=firstName
			var lastName=document.getElementById("lastName").value
			var lName=lastName
			var salary=document.getElementById("salary").value
			var sSalary=salary
			var identification=document.getElementById("identification").value
			var idField=identification
			var gender=document.getElementById("gender").value
			var gender1=gender
			var company=document.getElementById("company").value
			var company1=company
			var profession=document.getElementById("profession").value
			var professional=profession
			var deduction=3/100 *salary
			var NSSF=1/100 * deduction
			var percentageNSSF=1
			var NHIF=1/100 * deduction
			var percentageNHIF=1
			var HEALTH=1/100 * deduction
			var percentageHEALTH=1
			var percentageDeductions=3
			var taxing=5/100 *salary
			var GOVT=5/100 * salary
			var percentageGOVT=5
			var salaryAfterDeductions=salary-deduction
			var salaryAfterTax=salary-taxing
			var percentageTax=5
			var NET=salary-deduction-taxing
			var deductionAndTax=salary-deduction-taxing
			var percentageNet=8
			var totalPercentages=percentageNSSF+percentageNHIF+percentageHEALTH+percentageGOVT
			var totalNet=salary-deduction-taxing
			var recogName=firstName
			var mySalary=salary
			var percent=percentageTax
			var gotoAmount=GOVT
			var remSalary=NET

			if(salary>0){
				document.getElementById("fName").innerHTML=" "+fName
				document.getElementById("lName").innerHTML=" "+lName
				document.getElementById("sSalary").innerHTML=" "+sSalary 
				document.getElementById("idField").innerHTML=" User ID : "+idField
				document.getElementById("deductions").innerHTML=" "+Math.round(deduction*100)/100
				document.getElementById("tax").innerHTML=" "+Math.round(taxing*100)/100
				document.getElementById("net").innerHTML="TOTAL:"+Math.round(NET*100)/100
				document.getElementById("salaryAfterdeductions").innerHTML=" "+Math.round(salaryAfterDeductions*100)/100
				document.getElementById("percentageDeductions").innerHTML=" "+percentageDeductions + " % "
				document.getElementById("percentageTax").innerHTML=" "+percentageTax + " % "
				document.getElementById("salaryAfterTax").innerHTML=" "+Math.round(salaryAfterTax*100)/100
				document.getElementById("deductionAndTax").innerHTML=" "+Math.round(deductionAndTax*100)/100
				document.getElementById("percentageNet").innerHTML=" "+percentageNet + " % "
				document.getElementById("NSSF").innerHTML=" "+Math.round(NSSF*100)/100
				document.getElementById("percentageNSSF").innerHTML=" "+percentageNSSF + " % "
				document.getElementById("NHIF").innerHTML=" "+Math.round(NHIF*100)/100
				document.getElementById("percentageNHIF").innerHTML=" "+percentageNHIF + " % "
				document.getElementById("HEALTH").innerHTML=" "+Math.round(HEALTH*100)/100
				document.getElementById("percentageHEALTH").innerHTML=" "+percentageHEALTH + " % "
				document.getElementById("percentageGOVT").innerHTML=" "+percentageGOVT + " % "
				document.getElementById("GOVT").innerHTML=" "+Math.round(GOVT*100)/100
				document.getElementById("totalPercentages").innerHTML=" TOTAL PERCENTAGE "+totalPercentages + "%"
				document.getElementById("totalNet").innerHTML=" TOTAL NET "+Math.round(totalNet*100)/100 +" /="
				document.getElementById("recogName").innerHTML=" "+recogName
				document.getElementById("mySalary").innerHTML=" "+Math.round(mySalary*100)/100
				document.getElementById("percent").innerHTML=" "+percent +"%"
				document.getElementById("gotoAmount").innerHTML=" "+Math.round(gotoAmount*100)/100
				document.getElementById("remSalary").innerHTML=" "+Math.round(remSalary*100)/100
				document.getElementById("gender1").innerHTML=" "+gender1
				document.getElementById("company1").innerHTML=" "+company1
				document.getElementById("professional").innerHTML=" "+professional
			}else{

				alert("INVALID SALARY... ( Acording to the laws of kenya, salary should start at least at 100 Ksh )");
				window.open('index.html', '_self');
			}

			function countTime(){
				var myTime=new Date();
				var h=myTime.getHours();
				var m=myTime.getMinutes();
				var s=myTime.getSeconds();
				var period="AM";

				if(h==0){
					h=12;
				}

				if(h>12){
					h=h-12;
					period="PM";
				}

				h=(h<10) ? "0" +h:h;
				m=(m<10) ? "0" +m:m;
				s=(s<10) ? "0" +s:s;

				var time = h +":" + m +":" + s +" " +period;
				document.getElementById("clock").innerText=time;
				document.getElementById("clock").textContent=time;

				setTimeout(countTime, 1000);
			}

			countTime(); 


		}

	