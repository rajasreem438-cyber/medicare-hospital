from django.shortcuts import render, redirect, get_object_or_404
from .models import Appointment, Contact, Doctor, Department, Service, Gallery
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import (
    AppointmentSerializer,
    ContactSerializer,
    DoctorSerializer,
    DepartmentSerializer,
    ServiceSerializer,
    GallerySerializer
)

def index(request):
    return render(request, "index.html")


def doctors(request):
    doctors = Doctor.objects.all()
    return render(request, "doctors.html", {"doctors": doctors})


def doctor_profile(request, id):
    doctor = get_object_or_404(Doctor, id=id)
    return render(request, "doctor_profile.html", {"doctor": doctor})


def departments(request):
    return render(request, "departments.html")


def services(request):
    return render(request, "services.html")


def blogs(request):
    return render(request, "blogs.html")


def gallery(request):
    return render(request, "gallery.html")


def emergency(request):
    return render(request, "emergency.html")


def appointment(request):
    if request.method == "POST":
        Appointment.objects.create(
            name=request.POST.get("name"),
            email=request.POST.get("email"),
            phone=request.POST.get("phone"),
            department=request.POST.get("department"),
            doctor=request.POST.get("doctor"),
            date=request.POST.get("date"),
            message=request.POST.get("message"),
        )
        return redirect("appointment")

    return render(request, "appointment.html")


def contact(request):
    if request.method == "POST":
        Contact.objects.create(
            name=request.POST.get("name"),
            email=request.POST.get("email"),
            phone=request.POST.get("phone"),
            subject=request.POST.get("subject"),
            message=request.POST.get("message"),
        )
        return redirect("contact")


@api_view(["POST"])
def appointment_api(request):
    serializer = AppointmentSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response({
            "status": True,
            "message": "Appointment Booked Successfully"
        })

    return Response(
        serializer.errors,
        status=400
    )

@api_view(["POST"])
def contact_api(request):
    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response({
            "status": True,
            "message": "Message Sent Successfully"
        })

    return Response(
        serializer.errors,
        status=400
    )    
@api_view(["GET"])
def doctors_api(request):
    doctors = Doctor.objects.all()
    serializer = DoctorSerializer(doctors, many=True)

    return Response(serializer.data)    
@api_view(["GET"])
def doctor_profile_api(request, id):
    doctor = get_object_or_404(Doctor, id=id)
    serializer = DoctorSerializer(doctor)

    return Response(serializer.data)   

@api_view(["GET"])
def departments_api(request):
    departments = Department.objects.all()
    serializer = DepartmentSerializer(departments, many=True)

    return Response(serializer.data)   

@api_view(["GET"])
def services_api(request):
    services = Service.objects.all()
    serializer = ServiceSerializer(services, many=True)

    return Response(serializer.data)  
       
@api_view(["GET"])
def gallery_api(request):
    gallery = Gallery.objects.all()
    serializer = GallerySerializer(gallery, many=True)

    return Response(serializer.data)


