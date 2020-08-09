<h2><?php echo $title; ?></h2>

<?php foreach ($code as $snippet): ?>

        <h3>Code Snippet</h3>
        <div class="main">
                <?php echo $snippet['text']; ?>
        </div>

<?php endforeach; ?>
