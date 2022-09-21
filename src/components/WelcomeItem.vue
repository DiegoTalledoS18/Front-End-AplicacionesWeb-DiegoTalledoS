<form action="">

<h1>
  {{ $t("greeting",{name:"diego"}) }}
</h1>
<h3>
  {{$tc("product",2)}}
</h3>
<div class="card">

  <div class="field grid">
    <label for="code" class="col-12 mb-2 md:col-1 md:mb-0" >{{$t("code")}} </label>
    <div class="col-12 md:col-10">
      <input-text id="code" v-model="codigo"/>
      <Button class="ml-3" label="Validar"/>
    </div>

  </div>

  <div class="field grid">

    <label for="nombre" class="col-12 mb-2 md:col-1 md:mb-0" >{{$t("name")}} </label>
    <div class="col-12 md:col-10">
      <input-text id="nombre" placeholder="Solo letras y numeros" v-model="nombre"></input-text>
    </div>

  </div>

  <div class="field grid">

    <label for="abreviatura" class="col-12 mb-2 md:col-1 md:mb-0" >{{ $t("phone") }}</label>
    <div class="col-12 md:col-10">
      <input-text id="abreviatura" placeholder="Solo letras " v-model="abreviatura"></input-text>
    </div>

  </div>

  <div class="field grid">

    <label for="RUC" class="col-12 mb-2 md:col-1 md:mb-0" >RUC proveedor*</label>
    <div class="col-12 md:col-10">
      <input-text id="RUC" type="number" placeholder="Solo numeros " ></input-text>
    </div>

  </div>

  <div class="field grid">

    <label for="Precio" class="col-12 mb-2 md:col-1 md:mb-0" >Precio*</label>
    <div class="col-12 md:col-10">
      <input-text id="Precio" type="number" v-model="price" ></input-text>
    </div>

  </div>

  <div class="field grid">

    <label for="Categoria" class="col-12 mb-2 md:col-1 md:mb-0" >Categoria*</label>
    <div class="col-12 md:col-10">
      <pv-dropdown  :options="categories" optionLabel="name" placeholder="Select a categorie"></pv-dropdown>
    </div>

  </div>

  <div class="field grid">

    <label for="Body" class="col-12 mb-2 md:col-1 md:mb-0" >Body </label>
    <div class="col-12 md:col-10">
      <input-text id="Body" placeholder="Solo body" v-model="body"></input-text>
    </div>

  </div>

  <div class="field grid">

    <label for="PostId" class="col-12 mb-2 md:col-1 md:mb-0" >PostId </label>
    <div class="col-12 md:col-10">
      <input-text id="PostId" placeholder="Solo postID" type="number" v-model="postId"></input-text>
    </div>

  </div>

  <div class="field grid">

    <label for="PostId" class="col-12 mb-2 md:col-1 md:mb-0" >Id </label>
    <div class="col-12 md:col-10">
      <input-text id="PostId" placeholder="Solo Id" type="number" v-model="Id"></input-text>
    </div>

  </div>

  <div class="field grid">

    <label for="Categoria" class="col-12 mb-2 md:col-1 md:mb-0" >Comentarios*</label>
    <div class="col-12 md:col-10">
      <pv-dropdown  :options="comments" optionLabel="body" placeholder="Select a categorie"></pv-dropdown>
    </div>

  </div>

  <div class="field grid">
    <label for="LabelColor" class="col-12 mb-2 md:col-1 md:mb-0" >Color de etiqueta*</label>
    <div class="col-12 md:col-10">
      <pv-ColorPicker id="LabelColor" v-model="color" />
    </div>
  </div>

  <div class="field grid">
    <label for="calendario" class="col-12 mb-2 md:col-1 md:mb-0">Fecha*</label>
    <div class="field col-12 md:col-10">
      <Calendar id="calendario" inputId="icon" v-model="fecha" :showIcon="true" />
    </div>
  </div>

  <div class="field grid">
    <label for="" class="col-12 mb-2 md:col-1 md:mb-0">Estado*</label>
    <!--div class="field-radiobutton mr-2" v-for="estado in estados">
      <RadioButton inputId="estado" name="estado" v-model="estadoSeleccionado"/>
      <label for="estado">{{ estado }}</label>
    </div>
    <p>Estado: {{estadoSeleccionado}}</p-->
    <div class="field-radiobutton mr-2">
      <RadioButton inputId="estado1" name="estado" value="Activo" v-model="estadoSeleccionado" />
      <label for="estado1">Activo</label>
    </div>
    <div class="field-radiobutton mr-2">
      <RadioButton inputId="estado2" name="estado" value="Suspendio" v-model="estadoSeleccionado" />
      <label for="estado2">Suspendio</label>
    </div>
    <div class="field-radiobutton mr-2">
      <RadioButton inputId="estado3" name="estado" value="De baja" v-model="estadoSeleccionado" />
      <label for="estado3">De baja</label>
    </div>
  </div>

  <div class="field grid">
    <label for="impuesto" class="col-12 mb-2 md:col-1 md:mb-0">Afecta a impuesto*</label>
    <div class="col-12 md:col-10">
      <div class="field-checkbox">
        <Checkbox id="impuesto" v-model="impuesto" :binary="true" />
        <label for="binary">{{impuesto}}</label>
      </div>
    </div>
  </div>

  <div class="field grid">
    <label for="Foto" class="col-12 mb-2 md:col-1 md:mb-0">Foto*</label>
    <div class="col-12 md:col-10">

    </div>
  </div>

  <div class="field grid">
    <label for="descripcion" class="col-12 mb-2 md:col-1 md:mb-0">Descripcion*</label>
    <div class="col-12 md:col-10">
      <Textarea id="descripcion" v-model="descriptionValue" :autoResize="true" rows="5" cols="30" />
    </div>
  </div>

  <div class="field grid">
    <div class="flex justify-content-center flex-wrap mb-2 md:mb-5">
      <Button class="flex align-items-center justify-content-center m-2" >Grabar</Button>
      <Button class="flex align-items-center justify-content-center m-2" @click="" >Limpiar</Button>
      <Button class="flex align-items-center justify-content-center m-2" @click="createComment">Crear post</Button>
      <Button class="flex align-items-center justify-content-center m-2" @click="deleteComment">delte post</Button>
      <Button class="flex align-items-center justify-content-center m-2" @click="updateComment">update post</Button>

    </div>
  </div>

</div>

</form>



