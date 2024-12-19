<!doctype html><!-- comment -->
<html lang="en" data-bs-theme="auto">
    <head>
        {% include "header.metatags.html.php" %}
        {% include "header.iconos.html.php" %}
        {% include "header.css.html.php" %}
    </head>
    <body>        
        {% block css %}{% endblock %}
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top" aria-label="Fifth navbar example" >
            <div class="container-fluid">
                <a class="navbar-brand" href="#!">{% block logo %}{% endblock %}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExample05">
                    {% block menu %}{% endblock %}
                </div>
            </div>
        </nav>
        <main role="main" style="margin-top: 60px;" >{% block contenido %}{% endblock %}</main>
        
        {% include "footer.js.html.php" %}
        <!--Script Personalizados-->
        {% block js %}{% endblock %}
    </body>
</html>