# itranswarp.js
 
 ��ʱ���������ˣ����ǵ�¼���ǲ�֧�֣���Ҫ����

 ԭ�� REDEME �� ���ݿ��ʼ�� �ο����
	�����ݿ����� ���� init-db

itranswarp.css  ��Ҫ���� less-watch-compiler static/css/less static/css itranswarp.less  ���� 
themes default �� js �� css  �ļ� Ҫ�ο� ԭ���ļ���·�����ơ�


windows  ͨ��  set NODE_ENV=production  ���� �������� process.env.NODE_ENV


���л�����Ҫ��gm ģ�� ͼƬ���� ��װ http://www.graphicsmagick.org/��  ��ȷ��װ GraphicsMagick �Ϳ����ˡ�

΢����¼��ص� 

�� userApi GET /auth/from/:name

����� ���£�ע�� �� else �ڵ�����  
   �� ������� redirect ���� ΢�� ��ַ����  ��Ҫ��Ӧ Ҳ�� �����á���Ȩ�ص�ҳ�� ������� redirect=xxxx �Ϳ��Բ���ע���ˣ�Ч��δ���ԣ���


  if (jscallback) {
            redirect_uri = redirect_uri + '?jscallback=' + jscallback;
        }
        else {
          //  redirect_uri = redirect_uri + '?redirect=' + encodeURIComponent(_getReferer(ctx.request));
        }