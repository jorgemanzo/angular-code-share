<?php 

class Api extends MY_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('code_model');
        $this->load->helper('url_helper');
    }

    public function index() {
        $data['code'] = $this->code_model->get_code();
        $data['title'] = 'Code snippets';
        // $this->output
        //     ->set_content_type('application/json')
        //     ->set_output(json_encode($data));
        $this->sendJsonSuccess($data);
    }

    public function create() {
        $data = $this->input->request_headers();
        $this->sendJsonSuccess($data);
    }

    public function sendJsonSuccess($data = null, $msg = '', $update = '') {   // Send JSON data wrapped in a success status
        $this->output->set_content_type('application/json')
                     ->set_status_header(200)
                     ->set_output(json_encode($data));
    }

}