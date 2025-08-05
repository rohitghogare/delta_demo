import customtkinter #pip install customtkinter
import sqlite3 #pip install sqlite3
from tkinter import messagebox
from tkinter import *
from tkinter import ttk

app=customtkinter.CTk()
app.title("Employee System")
app.geometry("800*500")
app.config(bg="#17043d")

font1=('Arial',20,'bold')
font2=('Arial',15,'bold')
font3=('Arial',12,'bold')

frame1=customtkinter.CTkFrame(app,fg_color="#FFFFFF")
frame1.place(x=350,y=0)

app.mainloop()
import customtkinter
import sqlite3
from tkinter import messagebox
from tkinter import *
class Employee:
    def _init_(self):
        self.width=450
        self.height=500

    def show(self):
         print(self.width)
         print(self.height)

app = customtkinter.CTk()
app.title("Employee System")
app.geometry("800x500")  # Corrected geometry method
app.config(bg="#17043d")

font1 = ('Arial', 20, 'bold')
font2 = ('Arial', 15, 'bold')
font3 = ('Arial', 12, 'bold')

frame1 = customtkinter.CTkFrame(app, fg_color="#FFFFFF")
frame1.place(x=350, y=0,)

db=sqlite3.connect("Employee.db")
db.execute("CREATE TABLE IF NOT EXISTS EMPLOYEE (Employee_ID Integer, Name Text, Age Integer, Role Text)")
cursor=db.cursor()

id_label=customtkinter.CTkLabel(app,text="Employee")
db=sqlite3.connect("Employee.db")
db.execute("CREATE TABLE IF NOT EXISTS EMPLOYEE (Employee_ID Integer, Name Text, Age Integer, Role Text)")
cursor=db.cursor()

id_label=customtkinter.CTkLabel(app,text="Employee_ID:",text_font=font1)
id_label.place(x=20,y=20)
id_entry=customtkinter.CTkEntry(app,text_font=font2,text_color="000000",fg_color="#FFFFFF",border_color="#FFFFFF",width=200)
id_entry.place(x=140,y=20)

name_label=customtkinter.CTkLabel(app,text="Name:",text_font=font1)
name_label.place(x=20,y=80)
name_entry=customtkinter.CTkLabel(app,text_font=font2,text_color="#000000",fg_color="#FFFFFF",border_color="#FFFFFF",width=200)
name_entry.place(x=140,y=80)

age_label=customtkinter.CTkLabel(app,text="Age:",text_font=font1)
age_label.place(x=20,y=140)
age_entry=customtkinter.CTkLabel(app,text_font=font2,text_color="#000000",fg_color="#FFFFFF",border_color="#FFFFFF",width=200)
age_entry.place(x=140,y=140)

role_label=customtkinter.CTkLabel(app,text="Role:",text_font=font1)
role_label.place(x=20,y=200)
role_entry=customtkinter.CTkLabel(app,text_font=font2,text_color="#000000",fg_color="#FFFFFF",border_color="#FFFFFF",width=200)
role_entry.place(x=140,y=200)




app.mainloop()