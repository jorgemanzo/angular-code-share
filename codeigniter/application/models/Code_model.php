<?php
class Code_model extends CI_Model {
        public function __construct() {
            $this->load->database();
        }

        public function get_code() {
            $query = $this->db->get('code');
            return $query->result_array();
        }
}