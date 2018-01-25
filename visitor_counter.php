<?php

$counter_logfile = 'visitor_counter.txt';  // will used to store count! This file should contain beside this script file. 
// 5 minit in seconds
$inactive = 300;  // how many second? Set the session max lifetime ? 1m = 60s 
ini_set('session.gc_maxlifetime', $inactive); // set the session max lifetime 

session_start();

if (isset($_SESSION['testing']) && (time() - $_SESSION['testing'] > $inactive)) {
    // last request was more than 2 hours ago
    session_unset();     // unset $_SESSION variable for this page
    session_destroy();   // destroy session data
}

$_SESSION['testing'] = time(); // Update session
if( isset( $_SESSION['visit_count'] ) )
   {
      $_SESSION['visit_count'] += 1;
   }
   else
   {
      $_SESSION['visit_count'] = 1;
   } 

   if($_SESSION['visit_count']<2) { 

      // Open log file for reading and writing
      if ($vfile = @fopen($counter_logfile, 'r+'))
      {
      // Lock log file from other scripts
         $locked = flock($vfile, LOCK_EX);

         // Lock successful?
         if ($locked)
         {
         // Let's read current count
            $count = intval( trim( fread($vfile, filesize($counter_logfile) ) ) );

            // Update count by 1 and write the new value to the log file
            $count = $count + 1;
            rewind($vfile);
            fwrite($vfile, $count);

         }
         else
         {
         // Lock not successful. Better to ignore than to damage the log file
            $count = 1;
         }

         // Release file lock and close file handle
         flock($vfile, LOCK_UN);
         fclose($vfile);
      } 
   }

?>
