/**

 @Name: layuiSimpleBlog - 极简博客模板
 @Author: xuzhiwen
 @Copyright: layui.com

 */


layui.define(['jquery','element','laytpl','carousel','laypage'],function(exports){
	var $ = layui.$,laytpl = layui.laytpl,element = layui.element,laypage = layui.laypage,carousel = layui.carousel, layer = layui.layer;
	var _mm = {
		request : function(param){
			var _this = this;
			$.ajax({
				type   		: param.method || 'get',
				url    		: param.url    || '',
				dataType 	: param.type || 'json',
				contentType : param.contentType || 'application/json',
				data 		: param.data || '',
				async       : param.async,
				success 	: function(res){
					 // 请求成功
					console.log(res)
	                if(200 === res.code){
	                    layer.msg('操作成功!')
						window.location.reload();
	                }
					// 请求数据错误
	                else {
						layer.msg(res.message)
	                }
				},
				error       : function(err){
					 typeof param.error === 'function' && param.error(err.statusText);
				}
			});
		},
		renderHtml : function(htmlTemplate, data){
	        var template    = laytpl(htmlTemplate),
	            result      = template.render(data);
	        return result;
	    }
	}
  exports('mm',_mm)
});
