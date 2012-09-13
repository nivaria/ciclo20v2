<?php
// $Id: node-group.tpl.php 7510 2010-06-15 19:09:36Z sheena $
?>

<div id="node-<?php print $node->nid; ?>" class="node <?php print $node_classes; ?>">
  <div class="inner">

    <?php if ($page == 0): ?>
    <h2 class="title"><a href="<?php print $node_url ?>" title="<?php print $title ?>"><?php print $title ?></a></h2>
    <?php endif; ?>

    <?php if ($node_top && !$teaser): ?>
    <div id="node-top" class="node-top row nested">
      <div id="node-top-inner" class="node-top-inner inner">
        <?php print $node_top; ?>
      </div><!-- /node-top-inner -->
    </div><!-- /node-top -->
    <?php endif; ?>

    <div class="content clearfix">
      <?php if(!empty($node->field_group_image[0])): ?>
         <?php /*print theme('image',file_create_url($node->field_group_image[0]['filepath']),$node->field_group_image[0]['data']['alt'],$node->field_group_image[0]['data']['title'],array(
             'class' => 'group-image',
         ), FALSE);*/ ?>
      <?php endif; ?>  
      <?php print $content; ?>
        
      <?php 
        $subgroups = og_subgroups_get_group_children($node,FALSE);
        if(isset($subgroups) && count($subgroups)>0){
           $strvalsg = ''; 
           foreach($subgroups as $subnid => $subgroup){
              $strvalsg .= ($strvalsg!==''?', ':'').l($subgroup->title,'node/'.$subnid,array(
                 'attributes' => array(
                     'title' => $subgroup->title,
                 ),
              )); 
           } ?>
           <div class="terms">
           <h4><?php print t('Subgroups'); ?>: </h4>
           <?php print $strvalsg; ?>
           </div>
      <?php
        }
      ?>  
      <?php if ($terms): ?>
        <div class="terms">
    	  <h4>Tags:</h4>
          <?php print $terms; ?>
         </div>
      <?php endif;?>
    </div>
    

    <?php if ($links): ?>
    <div class="links">
      <?php print $links; ?>
    </div>
    <?php endif;?>
    </div>
    
    <?php if($page): 
        if(og_is_group_member($node,FALSE)): ?>
                <div class="og-buttons">
                <?php global $user;
                    if(og_menu_access_unsubscribe($node)){
                        print l('<span>'.t('Leave').'</span>','og/unsubscribe/'.$node->nid.'/'.$user->uid,array(
                            'attributes' => array(
                                'title' => t('Leave this group'),
                                'class' => 'og-unsubscribe-button',
                                'rel' => 'nofollow',
                            ),
                            'html' => TRUE,
                            'query' => drupal_get_destination(),
                        ));
                    }?>
                </div>    
    <?php 
        else: ?>    
            <div class="og-buttons"> 
            <?php print og_subscribe_link($node); ?>
            </div>    
    <?php 
        endif;
    endif; ?>
    
    <!-- /inner -->

    <?php if($page){
        $node_bottom .= '<div class="two-columns">';
        $node_bottom .= '<div class="column-1">';
        $block_notif = module_invoke('notifications_ui','block','view','0');
        $node_bottom .= '<div id="block-notifications_ui-0" class="block block-notifications_ui">';
        $node_bottom .= '<div class="inner clearfix">';
        $node_bottom .= '<h2 class="title block-title collapsiblock">';
        $node_bottom .= $block_notif['subject']; 
        $node_bottom .= '</h2>';
        $node_bottom .= '<div class="content">';
        $node_bottom .= $block_notif['content']; 
        $node_bottom .= '</div>';
        $node_bottom .= '</div>';
        $node_bottom .= '</div>';
        $node_bottom .= '</div>';
        $node_bottom .= '<div class="column-2">';
        $block_featured = module_invoke('views','block','view','a3e7b5edbe74088872090245cc4288ec');
        $node_bottom .= '<div id="block-views-a3e7b5edbe74088872090245cc4288ec" class="block block-views">';
        $node_bottom .= '<div class="inner clearfix">';
        $node_bottom .= '<h2 class="title block-title collapsiblock">';
        $node_bottom .= $block_featured['subject']; 
        $node_bottom .= '</h2>';
        $node_bottom .= '<div class="content">';
        $node_bottom .= $block_featured['content']; 
        $node_bottom .= '</div>';
        $node_bottom .= '</div>';
        $node_bottom .= '</div>';
        $node_bottom .= '</div>';
        $node_bottom .= '</div>';
    } ?>
    
  <?php if ($node_bottom && !$teaser): ?>
  <div id="node-bottom" class="node-bottom row nested">
    <div id="node-bottom-inner" class="node-bottom-inner inner">
      <?php print $node_bottom; ?>
    </div><!-- /node-bottom-inner -->
  </div><!-- /node-bottom -->
  <?php endif; ?>
</div>
