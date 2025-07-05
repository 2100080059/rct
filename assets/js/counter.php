<?php
$file = "counter.js";

// Read current count
$count = (int)file_get_contents($file);

// Increment count
$count++;

// Save new count
file_put_contents($file, $count);

// Return the count to frontend
echo $count;
?>
