<?php

	$cc1 = $_POST['cc1'];
	$cc2 = $_POST['cc2'];
	$cc3 = $_POST['cc3'];
	
	// Database connection
	$conn = new mysqli('0.0.0.0','root','root','learning_project');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("INSERT INTO leap (shirt, `t-shirt`, pant) VALUES (?, ?, ?)");

		if(!$stmt){
			echo "Prepare failed: (" . $conn->errno . ") " . $conn->error;
		}
		$stmt->bind_param("sss", $cc1,$cc3,$cc2);
		$execval = $stmt->execute();
		if(!$execval){
			echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
		}
		else{
			echo "Registration successfully...";
		}
		$stmt->close();
		$conn->close();
	}



/*	$cc1 = $_POST['cc1'];
	$cc2 = $_POST['cc2'];
	$cc3 = $_POST['cc3'];
	$stmt = $conn->prepare("INSERT INTO leap (shirt, `t-shirt`, pant) VALUES (?, ?, ?)");

	// Database connection
	$conn = new mysqli('0.0.0.0','root','root','learning_project');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into leap(shirt, t-shirt, pant) values(?,?,?)");
		$stmt->bind_param("sss", $cc1,$cc3,$cc2);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}*\
	
//INSERT INTO `leap` (`id`, `shirt`, `t-shirt`, `pant`) VALUES ('1', 'Shirt', 'T-shirts ', 'Black');
	
// Connecting to the Database

// Create a connection
// Die if connection was not successful
/*if (!$conn){
    die("Sorry we failed to connect: ". mysqli_connect_error());
}
else{
    echo "Connection was successful<br>";
}

$sql = "SELECT * FROM `password`";
$result = mysqli_query($conn, $sql);

// Find the number of records returned
$num = mysqli_num_rows($result);
echo $num;
echo " records found in the DataBase<br>";
// Display the rows returned by the sql query
if($num> 0){
    // $row = mysqli_fetch_assoc($result);
    // echo var_dump($row);
    // echo "<br>";
    // $row = mysqli_fetch_assoc($result);
    // echo var_dump($row);
    // echo "<br>";
    // $row = mysqli_fetch_assoc($result);
    // echo var_dump($row);
    // echo "<br>";
    // $row = mysqli_fetch_assoc($result);
    // echo var_dump($row);
    // echo "<br>";
    // $row = mysqli_fetch_assoc($result);
    // echo var_dump($row);
    // echo "<br>";
    // $row = mysqli_fetch_assoc($result);
    // echo var_dump($row);
    // echo "<br>";
    // $row = mysqli_fetch_assoc($result);
    // echo var_dump($row);
    // echo "<br>";

    // We can fetch in a better way using the while loop
    while($row = mysqli_fetch_assoc($result)){
        // echo var_dump($row);
        echo $row['id'] .  ". Congratulations ". $row['email'] ." You logged in successfully";
        echo "<br>";
    }


}*/


?>