from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('doctors/', views.doctors, name='doctors'),
    path('departments/', views.departments, name='departments'),
    path('services/', views.services, name='services'),
    path('appointment/', views.appointment, name='appointment'),
    path('blogs/', views.blogs, name='blogs'),
    path('gallery/', views.gallery, name='gallery'),
    path('emergency/', views.emergency, name='emergency'),
    path('contact/', views.contact, name='contact'),

    # Doctor Profile
    path('doctor/<int:id>/', views.doctor_profile, name='doctor_profile'),

    # API URLs
    path('api/appointment/', views.appointment_api, name='appointment_api'),
    path('api/contact/', views.contact_api, name='contact_api'),
    path("api/doctors/", views.doctors_api, name="doctors_api"),
    path("api/doctors/<int:id>/", views.doctor_profile_api, name="doctor_profile_api"),
    path("api/departments/", views.departments_api, name="departments_api"),
    path("api/services/", views.services_api, name="services_api"),
    path("api/gallery/", views.gallery_api, name="gallery_api"),
]
    
