$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});

	 $("#btn1").click(function(){
        $('#modal1').modal('show');//básico           
    });
    
    $("#btn2").click(function(){
        $('#modal2').modal('show');
        $('#modal2').draggable({}); //arrastrable        
    });

    $("#btn3").click(function(){
        $('#modal3').modal('show');
        $('#modal3').draggable({}); //arrastrable        
    });
    
        
    
     $("#btn_hide").click(function(){
        $('#modal_custom').modal('hide');	         
    });
     
    
    $('#exampleModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget) 
      var recipient = button.data('whatever') 
      var modal = $(this)
      modal.find('.modal-title').text('New message to ' + recipient)
      modal.find('.modal-body input').val(recipient)
      modal.css('width','750px');
    })
    
    $("#btn_custom").click(function(){
        $("#modal_custom").find(".modal-header").css("background", "linear-gradient(to left, #f5af19, #f12711)");
        $("#modal_custom").find(".modal-header").css("color", "white");
      $("#modal_custom").find(".modal-title").text("Ejemplo en vivo de cambio de título");
     

      
        $('#modal_custom').modal('show');
    });
});


