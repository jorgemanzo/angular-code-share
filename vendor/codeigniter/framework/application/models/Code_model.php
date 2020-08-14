<?php
class Code_model extends CI_Model {
        public function __construct() {
            $this->load->database();
        }

        public function get_code() {
            $query = $this->db->get('shares');
            return $query->result_array();
        }

        public function create_share($user_data) {
            $sql = array(
                'code' => $this->db->escape($user_data)
            );
            $res = $this->db->insert('shares', $sql);
            if($res) {
                $insert_id = $this->db->insert_id();
                return $insert_id;
            } else {
                return -1;
            }
        }
}