import tkinter as tk
from tkinter import messagebox
import os

def eliminar_archivos_temp():
    temp_path = os.environ['TEMP']
    files = os.listdir(temp_path)
    for file in files:
        file_path = os.path.join(temp_path, file)
        os.remove(file_path)
    messagebox.showinfo("Eliminación exitosa", "Se eliminaron los archivos temporales correctamente.")

def salir():
    messagebox.showinfo("Gracias", "Salu2, hasta la próxima.")
    ventana.destroy()

ventana = tk.Tk()
ventana.title("ELIMINAR FICHEROS %TEMP% V.1")

# Centrar la ventana
window_width = 400
window_height = 200
screen_width = ventana.winfo_screenwidth()
screen_height = ventana.winfo_screenheight()
x = int((screen_width/2) - (window_width/2))
y = int((screen_height/2) - (window_height/2))
ventana.geometry(f"{window_width}x{window_height}+{x}+{y}")

boton_eliminar = tk.Button(ventana, text="1 Eliminar archivos temp.", command=eliminar_archivos_temp)
boton_eliminar.pack(pady=10)

boton_salir = tk.Button(ventana, text="2 Salir", command=salir)
boton_salir.pack(pady=10)

ventana.mainloop()
