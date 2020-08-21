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
                $user_code,
                $mutable
            );
            $res = $this->db->query($sql, $query_parameters);
            if($res) {
                $insert_id = $this->db->insert_id();
                return $insert_id;
            } else {
                return -1;
            }
        }

        public function update_by_id($id, $user_code, $mutable) {
            $sql = "UPDATE shares SET code = ?, mutable = ? WHERE share_id = ?";
            $query_parameters = array(
                $user_code,
                $mutable,
                $id
            );
            return $this->db->query($sql, $query_parameters);
        }

        public function get_by_id($id) {
            $sql = "SELECT * FROM shares WHERE share_id = ?";
            $query_parameters = array(
                (int)$id
            );
            $query = $this->db->query($sql, $query_parameters);
            return $query->result_array();
        }
}