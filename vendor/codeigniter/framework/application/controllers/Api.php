<?php 

class Api extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('code_model');
        $this->load->helper('url_helper');
    }

    public function index() {
        $data['code'] = $this->code_model->get_code();
        $data['title'] = 'Code snippets';
        $this->sendJsonResponse($data);
    }

    public function create() {
        $data = $this->input->raw_input_stream;
        $decode = json_decode($data, TRUE, JSON_INVALID_UTF8_IGNORE);
        $new_id = $this->code_model->create_share($decode['code']);
        $status_code = $new_id == -1 ? 500 : 200;
        $this->sendJsonResponse($new_id, '', '', $status_code);
    }

    public function sendJsonResponse($data = null, $msg = '', $update = '', $code = 200) {   // Send JSON data wrapped in a success status
        $this->output->set_content_type('application/json')
                     ->set_status_header($code)
                     ->set_output(json_encode($data));
    }

}