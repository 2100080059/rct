<?php
$file = "counter.txt";

// Check if the file exists
if (!file_exists($file)) {
  file_put_contents($file, "0");
}

// Get the current count
$count = (int)file_get_contents($file);

// Increment the count
$count++;

// Save the new count
file_put_contents($file, $count);

// Return the updated count
echo $count;
?>
