

from django.urls import path, include

# Functuin Based
# from .views import article_list
# from .views import article_details


# class Based
# from .views import ArticleList, ArticleDetails

# mixins
# from .views import ArticleList, ArticleDetails

# view set, generic viewset
from .views import ArticleViewSet, UserViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')
router.register('users', UserViewSet)


urlpatterns = [
    # Function Based
    # path('articles', article_list),
    # path('articles/<int:pk>/', article_details),

    # Class Based, mixins
    # path('articles', ArticleList.as_view()),
    # path('articles/<int:id>/', ArticleDetails.as_view()),

    # view set
    path('api/', include(router.urls)),


]
