# Resources

For Kubernetes Configuration: Datree, Monokle

## Validating YAML file

- [YAML Lint](http://www.yamllint.com/)

## Assorted YAML Tools

- [Online YAML Tools](https://onlineyamltools.com/)

## Advanced tools

- [Lens](https://k8slens.dev/)

## Indicator Characters

Indicator characters include a special semantics used to describe the content of YAML document. The following table shows this in detail

<table>
    <tr>
        <th>Sr.No.</th>
        <th>Character & Functionality</th>
    </tr>
    <tr>
        <td>1.</td>
        <td>
            <pre>
<b>-</b> 
It denotes a block sequence entry
            </pre>
        </td>
    </tr>
    <tr>
        <td>2.</td>
        <td>
            <pre>
<b>?</b> 
It denotes a mapping key
            </pre>
        </td>
    </tr>
    <tr>
        <td>3.</td>
        <td>
            <pre>
<b>:</b> 
It denotes a mapping value
            </pre>
        </td>
    </tr>
    <tr>
        <td>4.</td>
        <td>
            <pre>
<b>,</b> 
It denotes flow collection entry
            </pre>
        </td>
    </tr>
    <tr>
        <td>5.</td>
        <td>
            <pre>
<b>[</b> 
It starts a flow sequence
            </pre>
        </td>
    </tr>
    <tr>
        <td>6.</td>
        <td>
            <pre>
<b>]</b> 
It ends a flow sequence
            </pre>
        </td>
    </tr>
    <tr>
        <td>7.</td>
        <td>
            <pre>
<b>{</b> 
It stars a flow mapping
            </pre>
        </td>
    </tr>
    <tr>
        <td>8.</td>
        <td>
            <pre>
<b>}</b> 
It ends a flow mapping
            </pre>
        </td>
    </tr>
    <tr>
        <td>9.</td>
        <td>
            <pre>
<b>#</b> 
It denotes the comments
            </pre>
        </td>
    </tr>
    <tr>
        <td>10.</td>
        <td>
            <pre>
<b>&</b> 
It denotes nodes anchor property
            </pre>
        </td>
    </tr>
    <tr>
        <td>11.</td>
        <td>
            <pre>
<b>*</b> 
It denotes alias node
            </pre>
        </td>
    </tr>
    <tr>
        <td>12.</td>
        <td>
            <pre>
<b>!</b> 
It denotes node's tag
            </pre>
        </td>
    </tr>
    <tr>
        <td>13.</td>
        <td>
            <pre>
<b>|</b> 
It denotes a literal block scalar
            </pre>
        </td>
    </tr>
    <tr>
        <td>14.</td>
        <td>
            <pre>
<b>></b> 
It denotes a folded block scalar
            </pre>
        </td>
    </tr>
    <tr>
        <td>15.</td>
        <td>
            <pre>
<b>'</b> 
Single quote surrounds a quoted flow scalar
            </pre>
        </td>
    </tr>
    <tr>
        <td>16.</td>
        <td>
            <pre>
<b>"</b> 
Double quote surrounds double quoted flow scalar
            </pre>
        </td>
    </tr>
    <tr>
        <td>17.</td>
        <td>
            <pre>
<b>%</b> 
It denotes the directive used
            </pre>
        </td>
    </tr>
</table>

The following example shows the characters used in syntax -

```
%YAML 1.1
---
!!map {
   ? !!str "sequence"
   : !!seq [
      !!str "one", !!str "two"
   ],
   ? !!str "mapping"
   : !!map {
      ? !!str "sky" : !!str "blue",
      ? !!str "sea" : !!str "green",
   }
}

# This represents
# only comments.
---
!!map1 {
   ? !!str "anchored"
   : !local &A1 "value",
   ? !!str "alias"
   : *A1,
}
!!str "text"
```
