<?php
class Code_model extends CI_Model {
        public function __construct() {
            $this->load->database();
        }

        public function get_code() {
            $sql = "SELECT * FROM shares";
            $query = $this->db->query($sql);
            return $query->result_array();
        }

        public function create_share($user_code, $mutable) {
            $sql = "INSERT shares (code, mutable) VALUES ( ?, ?)";
            $query_parameters = array(
                $this->db->escape($user_code),
                $this->db->escape($mutable)
            );
            $res = $this->db->query($sql, $query_parameters);
            if($res) {
                $insert_id = $this->db->insert_id();
                return $insert_id;
            } else {
                return -1;
            }
        }
}