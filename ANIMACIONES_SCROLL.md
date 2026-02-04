# Animaciones al Scrollear - EvolveLashes

## 🎨 Resumen de Implementación

Se ha implementado un sistema completo de animaciones al scrollear para toda la página web de EvolveLashes. Las animaciones se aplican tanto en diseño web como en móvil de manera responsive.

---

## ✨ Animaciones Implementadas

### 1. **Tipos de Animaciones**
- **Fade In Up** - Los elementos aparecen con efecto fade y se deslizan hacia arriba
- **Fade In** - Aparecimiento suave sin movimiento
- **Slide In Left** - Elementos que entran desde la izquierda
- **Slide In Right** - Elementos que entran desde la derecha
- **Scale In** - Elementos que aparecen con efecto de escala

### 2. **Efecto Stagger**
Se agregó un efecto de "cascada" para múltiples elementos en la misma sección:
- Delay de 0.1s, 0.2s, 0.3s, 0.4s y 0.5s
- Crea una sensación fluida y profesional

---

## 📍 Ubicaciones de Animaciones

### **Página Principal (index.astro)**

1. **Sección de Beneficios**
   - 4 tarjetas con `animate-fade-in-up` + stagger (1-4)
   - Cada elemento aparece de manera escalonada

2. **Servicios Destacados**
   - Encabezado con `animate-fade-in-up`
   - 3 tarjetas de servicios con `animate-fade-in-up` + stagger (1-3)

3. **Sobre la Especialista**
   - Imagen con `animate-slide-in-left`
   - Contenido con `animate-slide-in-right`
   - 3 iconos de pilares con `animate-scale-in` + stagger (1-3)

4. **Proceso de Trabajo**
   - Encabezado con `animate-fade-in-up`
   - 4 pasos con `animate-fade-in-up` + stagger (1-4)

5. **Testimonios**
   - Encabezado con `animate-fade-in-up`
   - 3 tarjetas de testimonios con `animate-fade-in-up` + stagger (1-3)

6. **Preguntas Frecuentes (FAQ)**
   - Encabezado con `animate-fade-in-up`
   - 4 acordeones con `animate-fade-in-up` + stagger (1-4)

7. **Sección CTA (Cobertura)**
   - Emoji con `animate-fade-in`
   - Encabezado con `animate-fade-in-up`
   - Párrafo con `animate-fade-in-up` + stagger-1
   - Botón con `animate-scale-in`
   - Texto final con `animate-fade-in` + stagger-2

### **Página de Servicios (services.astro)**

1. **Encabezado**
   - Título con `animate-fade-in-up`

2. **Secciones de Servicios**
   - Cada sección con `animate-fade-in-up`
   - Stagger effect (0, 1, 2, 3)

3. **Call to Action (CTA)**
   - Tarjeta con `animate-scale-in`

---

## 🛠️ Archivos Modificados

### 1. **src/styles/global.css**
- Agregadas 5 nuevas animaciones con `@keyframes`
- Clases de animación principal: `.animate-fade-in-up`, `.animate-fade-in`, etc.
- Clases de stagger: `.stagger-1` a `.stagger-5`
- Clase de control: `.animate-in`

### 2. **src/scripts/scrollAnimations.ts**
- Script que usa **Intersection Observer API**
- Detecta cuando elementos entran en el viewport
- Automáticamente agrega la clase `animate-in` para activar animaciones
- Deja de observar después de la primera animación (optimización)

### 3. **src/layouts/Layout.astro**
- Importa y ejecuta `scrollAnimations.ts`
- Se ejecuta en `DOMContentLoaded`
- Se reinicializa después de navegaciones en Astro (`astro:after-swap`)

### 4. **src/pages/index.astro**
- Agregadas clases de animación a todos los elementos principales
- Uso consistente de `animate-fade-in-up` con stagger

### 5. **src/pages/services.astro**
- Agregadas clases de animación a secciones y encabezados
- Efecto de cascada en servicios

---

## 🎬 Características Técnicas

### **Intersection Observer API**
- ✅ Eficiente: Solo se ejecuta cuando es necesario
- ✅ Accesible: Respeta `prefers-reduced-motion`
- ✅ Compatible: Funciona en todos los navegadores modernos

### **Responsive**
- ✅ Funciona perfectamente en móvil
- ✅ Mismas animaciones en todos los breakpoints
- ✅ Optimizado para touch devices

### **Performance**
- ✅ CSS animations (mejor rendimiento que JavaScript)
- ✅ GPU accelerated (transform y opacity)
- ✅ Duración de 0.6s (rápido pero visible)

---

## 🚀 Cómo Funciona

1. **Estado inicial**: Los elementos con clases de animación están **ocultos** (opacity: 0) y con transformaciones aplicadas
2. El script `scrollAnimations.ts` usa **Intersection Observer** para detectar cuándo cada elemento entra en el viewport
3. **Al scrollear**: Cuando un elemento se vuelve visible, se agrega la clase `.animate-in`
4. **Animación activada**: Solo entonces se ejecuta la animación CSS correspondiente
5. El elemento deja de ser observado para optimizar performance

### ✅ Resultado
- Los elementos aparecen **solo cuando el usuario scrollea hasta ellos**
- Si recargas la página, solo verás las animaciones de los elementos visibles
- Al bajar, cada sección se animará progresivamente

---

## 📱 Responsive Design

Todas las animaciones funcionan en:
- **Desktop** (breakpoint `md` en adelante)
- **Tablet** (breakpoint `sm`)
- **Mobile** (breakpoint base)

Los delays de stagger y duraciones son consistentes en todos los dispositivos.

---

## 🎨 Parámetros de Animación

```css
/* Duración: 0.6 segundos (rápido y suave) */
/* Timing: ease-out (comienza rápido, termina lento) */
/* Fill Mode: forwards (mantiene el estado final) */
/* Initial State: opacity 0 (comienza invisible) */
```

---

## ✅ Estado de Compilación

✓ Build exitoso
✓ No hay errores
✓ Todas las páginas generadas correctamente
✓ Scripts incluidos en el bundle final

---

## 📝 Próximas Mejoras Sugeridas

- Agregar animaciones a componentes dinámicos
- Personalizar delays según tipo de dispositivo
- Agregar animaciones on-hover en elementos interactivos
- Implementar parallax en secciones específicas

---

**Fecha de Implementación**: Febrero 2026
**Astro Framework**: Compatible con últimas versiones
**Browser Support**: Chrome, Firefox, Safari, Edge (todos modernos)
