<?php
require_once ("/var/www/html/htmlpurifier/library/HTMLPurifier.auto.php");
abstract class MY_Controller extends CI_Controller {
    public function __construct() {
        parent::__construct();
    }

    public function getJsonPostDataAsArray() {
        $config = HTMLPurifier_Config::createDefault();
        $purifier = new HTMLPurifier($config);

        $raw = $this->input->raw_input_stream;
        $clean = $purifier->purify($raw);
        return $clean;
        $json  = json_decode($clean, TRUE, JSON_INVALID_UTF8_IGNORE );
    }
}