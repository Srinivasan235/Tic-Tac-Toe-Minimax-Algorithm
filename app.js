var count=0
function clicked(id) {
	
	if(count%2===0)
	{
		document.getElementById(id).innerHTML = 'X';
		count=count+1
		console.log(count);
		bestMove();
	}
	
	
	
	checkResult();
}


function bestMove()
{
	for(var i=0; i<=8;i++)
	{
		if(document.getElementById(i).innerHTML ==="")
		{
			document.getElementById(i).innerHTML = 'O';
			count=count+1
			break;
		}
		
	}
}
function startGame() {
	for(var i=0; i<=8;i++)
	{
		document.getElementById(i).innerHTML = '';
	}
	console.log('start new game');
}

function checkResult()
{
	var a=[]
	for(var j=0;j<=8;j++)
	{
		a[j]=document.getElementById(j).innerHTML;
	}
	if(a[0]===a[1] && a[1]===a[2])
	{
		if(a[0]==='X'||a[0]==='O')
		{
			alert("you won ")
			startGame()
		}
		
	}
	if(a[3]===a[4] && a[4]===a[5])
	{
		if(a[3]==='X'||a[3]==='O')
		{
			alert("you won ")
			startGame()
		}
	}
	if(a[6]===a[7] && a[7]===a[8])
	{
		if(a[6]==='X'||a[6]==='O')
		{
			alert("you won ")
			startGame()
		}
	}
}
